package org.example.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.util.Map;

@Service
public class IPService {

    @Value("${geo.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> getIPInfo(String ip) {
        String url = "https://geo.ipify.org/api/v2/country,city?apiKey=" + apiKey + "&ipAddress=" + ip;
        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);
        return response.getBody();
    }
}
