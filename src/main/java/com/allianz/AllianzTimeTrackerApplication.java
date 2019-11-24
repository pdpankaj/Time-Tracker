package com.allianz;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;

import com.allianz.model.Employee;
import com.allianz.service.EmployeeService;

@SpringBootApplication
@EnableCaching
public class AllianzTimeTrackerApplication {

	@Autowired
	EmployeeService employeeService;

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(AllianzTimeTrackerApplication.class, args);

		EmployeeService employeeService = context.getBean(EmployeeService.class);

		Employee emp = new Employee();
		emp.setFirstName("Pankaj");
		emp.setLastName("Prasad");
		emp.setEmailId("pp@test.com");
		emp.setInTime("19.11.2019 09:00");
		emp.setOutTime("19.11.2019 17:00");

		Employee emp1 = new Employee();
		emp1.setFirstName("Test");
		emp1.setLastName("Test");
		emp1.setEmailId("test@test.com");
		emp1.setInTime("19.11.2019 09:00");
		emp1.setOutTime("19.11.2019 17:00");

		Employee emp2 = new Employee();
		emp2.setFirstName("Test03");
		emp2.setLastName("Test03");
		emp2.setEmailId("test03@test.com");
		emp2.setInTime("19.11.2019 09:00");
		emp2.setOutTime("19.11.2019 17:00");

		employeeService.insertEmployee(emp);

		List<Employee> employees = new ArrayList<>();
		employees.add(emp1);
		employees.add(emp2);
		employeeService.insertEmployees(employees);

		System.out.println("Inside the main class making call to service first time");
		List<Employee> employeeList1 = employeeService.getAllEmployees();
		for (Employee employee : employeeList1) {
			System.out.println(employee.toString());
		}

		System.out.println("Inside the main class making call to service second time where it will use hazelcast");
		List<Employee> employeeList2 = employeeService.getAllEmployees();
		for (Employee employee : employeeList2) {
			System.out.println(employee.toString());
		}
	}
}