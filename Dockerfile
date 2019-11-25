FROM tomcat:8.0.43-jre8

COPY ./docker-resources/Time-Tracker-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/

COPY ./docker-resources/UI/Time-Tracker-Client/* /usr/local/tomcat/webapps/ROOT/

#CMD ["catalina.sh","run"]

EXPOSE 8080:8080 