package com.allianz.repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.allianz.model.Employee;
import com.allianz.service.exceptions.EmployeeNotFoundException;

@Repository
public class EmployeeRepositoryImpl extends JdbcDaoSupport implements EmployeeRepository {

	@Autowired
	DataSource dataSource;

	@PostConstruct
	private void initialize() {
		setDataSource(dataSource);
	}

	@Override
	public void insertEmployee(Employee emp) {
		final String sql = "INSERT INTO employee " + "(firstName,lastName,emailId,inTime,outTime) VALUES (?, ?, ?, ?, ?)";
		getJdbcTemplate().update(sql, new Object[] {  emp.getFirstName(), emp.getLastName(),
				emp.getEmailId(), emp.getInTime(), emp.getOutTime() });
	}

	@Override
	public void insertEmployees(List<Employee> employees) {
		final String sql = "INSERT INTO employee " + "(firstName,lastName,emailId,inTime,outTime) VALUES (?, ?, ?, ?, ?)";
		getJdbcTemplate().batchUpdate(sql, new BatchPreparedStatementSetter() {
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Employee employee = employees.get(i);
				ps.setString(1, employee.getFirstName());
				ps.setString(2, employee.getLastName());
				ps.setString(3, employee.getEmailId());
				ps.setString(4, employee.getInTime());
				ps.setString(5, employee.getOutTime());
			}

			public int getBatchSize() {
				return employees.size();
			}
		});

	}

	@Override
	public List<Employee> getAllEmployees() {
		final String sql = "SELECT * FROM employee";
		List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

		List<Employee> result = new ArrayList<Employee>();
		for (Map<String, Object> row : rows) {
			Employee emp = new Employee();
			emp.setEmpId(Integer.parseInt(""+row.get("id")));
			emp.setFirstName((String) row.get("firstName"));
			emp.setLastName((String) row.get("lastName"));
			emp.setEmailId((String) row.get("emailId"));
			emp.setInTime((String) row.get("inTime"));
			emp.setOutTime((String) row.get("outTime"));
			result.add(emp);
		}

		return result;
	}

	@Override
	public Employee getEmployeeById(String empId) {
		final String sql = "SELECT * FROM employee WHERE empId = ?";
		return (Employee) getJdbcTemplate().queryForObject(sql, new Object[] { empId }, new RowMapper<Employee>() {
			@Override
			public Employee mapRow(ResultSet rs, int rwNumber) throws SQLException, EmployeeNotFoundException {
				Employee emp = new Employee();
				emp.setEmpId(rs.getInt("id"));
				emp.setFirstName(rs.getString("firstName"));
				emp.setLastName(rs.getString("firstName"));
				emp.setEmailId(rs.getString("emailId"));
				emp.setInTime(rs.getString("inTime"));
				emp.setOutTime(rs.getString("outTime"));
				return emp;
			}
		});
	}
	
	@Override
	public Employee getEmployeeByEmailId(String emailId) {
		final String sql = "SELECT * FROM employee WHERE emailId = ?";
		return (Employee) getJdbcTemplate().queryForObject(sql, new Object[] { emailId }, new RowMapper<Employee>() {
			@Override
			public Employee mapRow(ResultSet rs, int rwNumber) throws SQLException, EmployeeNotFoundException {
				Employee emp = new Employee();
				emp.setEmpId(rs.getInt("id"));
				emp.setFirstName(rs.getString("firstName"));
				emp.setLastName(rs.getString("lastName"));
				emp.setEmailId(rs.getString("emailId"));
				emp.setInTime(rs.getString("inTime"));
				emp.setOutTime(rs.getString("outTime"));
				return emp;
			}
		});
	}

	@Override
	public void deleteEmployee(int id) {
		String sql = "DELETE FROM employee WHERE id="+id;
		getJdbcTemplate().execute(sql);		
	}
	
    public  void printSQLException(SQLException ex) {
        for (Throwable e: ex) {
            if (e instanceof SQLException) {
                e.printStackTrace(System.err);
                System.err.println("SQLState: " + ((SQLException) e).getSQLState());
                System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
                System.err.println("Message: " + e.getMessage());
                Throwable t = ex.getCause();
                while (t != null) {
                    System.out.println("Cause: " + t);
                    t = t.getCause();
                }
            }
        }
    }

}
