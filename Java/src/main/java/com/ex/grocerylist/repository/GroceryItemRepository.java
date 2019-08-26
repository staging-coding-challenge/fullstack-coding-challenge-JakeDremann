package com.ex.grocerylist.repository;

import com.ex.grocerylist.model.GroceryItem;
import com.ex.grocerylist.model.GroceryList;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository("GroceryItemRepositoryBean")
@Transactional
public class GroceryItemRepository {

    private SessionFactory sessionFactory;

    @Autowired
    private void setSessionFactory(SessionFactory sessionFactoryBean){
        this.sessionFactory = sessionFactoryBean;
    }

    public List<GroceryItem> getByList(int list_id){

        Session session = this.sessionFactory.getCurrentSession();
        String queryString = "from GroceryItem where list_id = :list_id";
        Query query = session.createQuery(queryString);
        query.setParameter("list_id", list_id);

        return query.list();
    }

    public int addItemToList(GroceryItem item){

        Session session = this.sessionFactory.getCurrentSession();

        return (Integer) session.save(item);
    }

    public void deleteItem(int item_id){

        Session session = this.sessionFactory.getCurrentSession();
        String queryString = "delete from GroceryItem where item_id = :item_id";
        Query query = session.createQuery(queryString);
        query.setParameter("item_id", item_id);

        query.executeUpdate();
    }

    public void deleteAllItems(int list_id){

        Session session = this.sessionFactory.getCurrentSession();
        String queryString = "delete from GroceryItem where list_id = :list_id";
        Query query = session.createQuery(queryString);
        query.setParameter("list_id", list_id);

        query.executeUpdate();
    }

}
