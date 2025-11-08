package org.example.api;

import org.example.services.IPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/ip")
public class IPController {

    @Autowired
    private IPService ipService;

    @GetMapping
    public Map<String, Object> getIPInfo(@RequestParam String ip) {
        return ipService.getIPInfo(ip);
    }
}
