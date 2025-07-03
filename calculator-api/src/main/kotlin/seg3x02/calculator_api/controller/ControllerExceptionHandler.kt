package seg3x02.calculator_api

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestControllerAdvice
import java.lang.ArithmeticException

@RestControllerAdvice
class ControllerExceptionHandler {

    // Gestion de l'exception pour division par zéro
    @ExceptionHandler(ArithmeticException::class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    fun handleArithmeticException(ex: ArithmeticException): ResponseEntity<String> {
        return ResponseEntity.badRequest().body("Erreur : Division par zéro non autorisée")
    }

    @ExceptionHandler(Exception::class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    fun handleException(ex: Exception): ResponseEntity<String> {
        return ResponseEntity.badRequest().body("Erreur : ${ex.localizedMessage}")
    }
}
