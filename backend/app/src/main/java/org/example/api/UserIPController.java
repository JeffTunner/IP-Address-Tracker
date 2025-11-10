package org.example.api;

import jakarta.servlet.http.HttpServletRequest;
import org.example.services.IPService;
import org.example.services.UserIPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/ip/myself")
public class UserIPController {

    @Autowired
    private UserIPService userIPService;

    @GetMapping
    public Map<String, Object> getOwnIPInfo() {
        return userIPService.getOwnIPInfo();
    }


}
