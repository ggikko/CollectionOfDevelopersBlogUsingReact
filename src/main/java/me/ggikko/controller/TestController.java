package me.ggikko.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Park Ji Hong, ggikko.
 */
@RestController
public class TestController {

        @RequestMapping("/")
        public String index() {
            return "helloworld!";
        }

}
