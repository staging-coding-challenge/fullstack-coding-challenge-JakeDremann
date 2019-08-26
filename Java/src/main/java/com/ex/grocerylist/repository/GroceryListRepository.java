package com.ex.grocerylist.repository;

import com.ex.grocerylist.model.GroceryList;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("GroceryListRepositoryBean")
public class GroceryListRepository {

    private SessionFactory sessionFactory;

    @Autowired
    private void setSessionFactory(SessionFactory sessionFactoryBean){
        this.sessionFactory = sessionFactoryBean;
    }

    public List<GroceryList> getAllLists() {
        Session session = this.sessionFactory.getCurrentSession();

        String queryString = "from GroceryList";

        Query q = session.createQuery(queryString);

        return q.list();
    }

    public int createGroceryList(GroceryList groceryList) {
        Session session = this.sessionFactory.getCurrentSession();

        return (Integer) session.save(groceryList);
    }

    public void deleteGroceryList(int list_id){

        Session session = this.sessionFactory.getCurrentSession();
        String queryString = "delete from GroceryList where list_id = :list_id";
        Query query = session.createQuery(queryString);
        query.setParameter("list_id", list_id);

        query.executeUpdate();
    }

}
