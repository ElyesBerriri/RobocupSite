package com.backend.RegistrationControllers;

import com.backend.models.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class Registration {
    private final com.backend.repositories.participantRepository participantRepository;
    @PostMapping("/RegisterRequest")
    public ResponseEntity<?> registerParticipant(@Valid @RequestBody RegisterRequest registerRequest) {
        Participant participant = new Participant(registerRequest.getChef(),registerRequest.getEmail(),registerRequest.getTel(),registerRequest.getConcours(),registerRequest.getRobot());


        participantRepository.save(participant);
        return ResponseEntity.ok(new MessageResponse("Participant registered successfully!"));
    }
}
