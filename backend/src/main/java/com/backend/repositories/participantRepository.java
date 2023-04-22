package com.backend.repositories;

import com.backend.models.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface participantRepository extends JpaRepository<Participant, Long> {

}
