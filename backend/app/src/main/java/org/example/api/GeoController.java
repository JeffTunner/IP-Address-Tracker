package org.example.api;

import org.example.models.GeoResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/search")
@RestController
public class GeoController {

    @GetMapping
    public GeoResponse searchIP(@RequestParam(required = false) String ip) {
        if(ip == null || ip.isEmpty()) {
            ip = "8.8.8.8";
        }
        return new GeoResponse(
                ip,
                "India",
                "Uttar Pradesh",
                "UTC +05:30",
                "Jio Fiber"
        );
    }
}
