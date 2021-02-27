package com.deliverysystem.deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deliverysystem.deliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
