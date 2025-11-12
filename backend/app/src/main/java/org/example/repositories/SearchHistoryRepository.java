package org.example.repositories;

import org.example.models.SearchHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SearchHistoryRepository extends JpaRepository<SearchHistory, Long> {

    List<SearchHistory> findTop5ByOrderBySearchedAtDesc();
    Optional<SearchHistory> findByIpAddress(String ipAddress);
}
