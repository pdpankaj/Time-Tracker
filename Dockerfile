From tomcat:8.0.51-jre8-alpine
RUN rm -rf /usr/local/tomcat/webapps/*
COPY ./docker-resources/Time-Tracker.war /usr/local/tomcat/webapps/Time-Tracker.war
CMD ["catalina.sh","run"]