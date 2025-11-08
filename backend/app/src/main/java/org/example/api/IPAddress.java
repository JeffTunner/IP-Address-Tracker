package org.example.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IPAddress {

    @GetMapping("/")
    public String Hello() {
        return "Hello from the server";
    }
}
