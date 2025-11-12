package org.example.api;

import org.example.models.SearchHistory;
import org.example.services.IPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/ip/history")
public class SearchHistoryController {

    @Autowired
    private IPService ipService;

    @GetMapping
    public List<SearchHistory> getRecentSearches() {
        return ipService.getRecentSearches();
    }

}
