package com.ex.grocerylist.configuration;

import org.apache.commons.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
public class AppConfig {

    //@Value("${driverClassName}")
    String driverClassName = "org.postgresql.Driver";

    //@Value("${username}")
    String username = "jdremann";

    //@Value("${password}")
    String password = "j041050916";

    //@Value("${url}")
    String url = "jdbc:postgresql://codingchallengedb.ckmkklrlasym.us-east-2.rds.amazonaws.com:5432/grocerylist";


    @Bean
    public DataSource dataSource(){
        BasicDataSource ds = new BasicDataSource();
        ds.setDriverClassName(driverClassName);
        ds.setUrl(url);
        ds.setUsername(username);
        ds.setPassword(password);

        return ds;
    }

    @Bean
    public LocalSessionFactoryBean localSessionFactoryBean(DataSource ds){
        LocalSessionFactoryBean sfBean = new LocalSessionFactoryBean();
        sfBean.setDataSource(ds);
        sfBean.setPackagesToScan("com.ex.grocerylist.model");
        sfBean.setHibernateProperties(getSfProps());
        return sfBean;
    }

    @Bean
    public HibernateTransactionManager transactionManager(SessionFactory sf) {
        HibernateTransactionManager manager = new HibernateTransactionManager();
        manager.setSessionFactory(sf);

        return manager;
    }

    private Properties getSfProps(){
        Properties props = new Properties();
        props.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect");
        props.setProperty("hibernate.show_sql", "true");
        props.setProperty("hibernate.format_sql", "true");
        props.setProperty("hibernate.hbm2ddl.auto", "update");
        return props;
    }
}
