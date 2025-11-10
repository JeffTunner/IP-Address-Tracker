package org.example.services;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class UserIPService {

    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> getOwnIPInfo() {
        String url = "https://api.ipify.org?format=json";
        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);
        return response.getBody();
    }
}
