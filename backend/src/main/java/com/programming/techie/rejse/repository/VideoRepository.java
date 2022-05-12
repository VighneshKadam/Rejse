package com.programming.techie.rejse.repository;

import com.programming.techie.rejse.model.Video;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VideoRepository extends MongoRepository<Video, String> {
}
