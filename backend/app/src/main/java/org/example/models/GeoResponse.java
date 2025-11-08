package org.example.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class GeoResponse {

    private String ip;
    private String country;
    private String region;
    private String timezone;
    private String isp;
}
