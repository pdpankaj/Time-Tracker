package com.allianz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.allianz.model.Employee;
import com.allianz.repository.EmployeeRepository;
import com.allianz.service.EmployeeService;
import com.allianz.service.exceptions.EmployeeNotFoundException;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping({ "/Time-Tracker/employees" })
public class AllianzEmployeeController {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	EmployeeService employeeService;
	
	//This code is used for the testing purpose only
	//private List<Employee> employees = createList();

	@GetMapping(produces = "application/json")
	public List<Employee> firstPage() {
		System.out.println("Inside first page API");
		List<Employee> list = employeeRepository.getAllEmployees();
		if(list.isEmpty()) {
			throw new EmployeeNotFoundException();
		}
		return list;
	}

	@GetMapping("{id}")
	public Employee getEmployee(@PathVariable String id) {
		return employeeService.getEmployeeById(id);
	}

	@GetMapping("email/{emailId}")
	public Employee getEmployeesyEmailId(@PathVariable String emailId) {
		return employeeService.getEmployeeByEmailId(emailId);
	}

	
	@DeleteMapping(path = { "/{id}" })
	public void delete(@PathVariable("id") int id) {
		employeeService.deleteEmployee(id);
	}

	@PostMapping
	public Employee create(@RequestBody Employee employee) {
		employeeService.insertEmployee(employee);
		return employee;
	}

	
	/*
	 	This code is used for the testing purpose only
	 	private static List<Employee> createList() {
		List<Employee> tempEmployees = new ArrayList<>();
		Employee emp= new Employee();
		emp.setFirstName("Pankaj");
		emp.setLastName("Prasad");
		emp.setEmailId("pp@test.com");
		emp.setInTime("19.11.2019 09:00");
		emp.setOutTime("19.11.2019 17:00");
		
		Employee emp1= new Employee();
		emp1.setFirstName("Test");
		emp1.setLastName("Test");
		emp1.setEmailId("test@test.com");
		emp1.setInTime("19.11.2019 09:00");
		emp1.setOutTime("19.11.2019 17:00");
		tempEmployees.add(emp);
		tempEmployees.add(emp1);
		return tempEmployees;
	}*/

}