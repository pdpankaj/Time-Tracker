package com.allianz.repository;

import java.util.List;

import com.allianz.model.Employee;

public interface EmployeeRepository {
	void insertEmployee(Employee employee);
	void insertEmployees(List<Employee> employees);
	List<Employee> getAllEmployees();
	Employee getEmployeeById(String empId);
	Employee getEmployeeByEmailId(String emailId);
	void deleteEmployee(int id);
}
