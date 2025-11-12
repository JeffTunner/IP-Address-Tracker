package org.example.services;

import org.example.models.SearchHistory;
import org.example.repositories.SearchHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

@Service
public class IPService {

    @Value("${geo.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @Autowired
    private SearchHistoryRepository historyRepository;

    public List<SearchHistory> getRecentSearches() {
        return historyRepository.findTop5ByOrderBySearchedAtDesc();
    }

    public Map<String, Object> getIPInfo(String ip) {
        try {
            String url = "https://geo.ipify.org/api/v2/country,city?apiKey=" + apiKey + "&domain=" + ip;
            ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);

            historyRepository.save(new SearchHistory(ip));

            if(response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                return response.getBody();
            } else {
                throw new RuntimeException("Failed to fetch data: " +response.getStatusCode());
            }
        } catch (Exception e) {
            return Map.of(
                    "error", true,
                    "message", "Could not fetch IP Info :" +e.getMessage()
            );
        }


    }
}
