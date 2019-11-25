package com.allianz;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  Inside SERVER$$$$$$$$$$$$$$$$$$$$$$$$$");
		return application.sources(AllianzTimeTrackerApplication.class);
	}
}
