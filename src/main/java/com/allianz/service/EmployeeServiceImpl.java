package com.allianz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.allianz.model.Employee;
import com.allianz.repository.EmployeeRepository;

@Service
@CacheConfig(cacheNames = "employees")
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void insertEmployee(Employee employee) {
		employeeRepository.insertEmployee(employee);
	}

	@Override
	public void insertEmployees(List<Employee> employees) {
		employeeRepository.insertEmployees(employees);
	}

	@Override
	@Cacheable()
	public List<Employee> getAllEmployees() {
		System.out.println("Inside the service layer");
		return employeeRepository.getAllEmployees();

	}

	@Override
	@Cacheable()
	public Employee getEmployeeById(String empId) {
		Employee employee = employeeRepository.getEmployeeById(empId);
		return employee;
	}
	
	@Override
	@Cacheable()
	public Employee getEmployeeByEmailId(String emailId) {
		Employee employee = employeeRepository.getEmployeeByEmailId(emailId);
		return employee;
	}

	@Override
	public void deleteEmployee(int id) {
		employeeRepository.deleteEmployee(id);		
	}

}
