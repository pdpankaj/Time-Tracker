package com.allianz.service;

import java.util.List;

import com.allianz.model.Employee;

public interface EmployeeService {
	void insertEmployee(Employee emp);
	void insertEmployees(List<Employee> employees);
	List<Employee> getAllEmployees();
	Employee getEmployeeById(String empid);
	Employee getEmployeeByEmailId(String emailId);
	void deleteEmployee(int id);
}
