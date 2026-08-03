package com.Pandagit.gitAc;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://98.93.223.103")
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public List<Student> getStudents() {

        return List.of(
                new Student(1, "Pandari"),
                new Student(2, "Ali"),
                new Student(3, "Anvi")
        );
    }
}
