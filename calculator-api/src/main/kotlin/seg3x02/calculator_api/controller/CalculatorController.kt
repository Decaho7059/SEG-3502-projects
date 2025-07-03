package seg3x02.calculator_api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("calculator")
class ConverterController {

    @GetMapping("/add/{nombre1}/{nombre2}")
    fun getAddition(@PathVariable nombre1: Double, @PathVariable nombre2: Double) : Double { 
        return nombre1 + nombre2 }

    @GetMapping("/subtract/{nombre1}/{nombre2}")
    fun getSubtraction(@PathVariable nombre1: Double, @PathVariable nombre2: Double) : Double { 
        return nombre1 - nombre2 }

    @GetMapping("/multiply/{nombre1}/{nombre2}")
    fun getMultiplication(@PathVariable nombre1: Double, @PathVariable nombre2: Double) : Double { 
        return nombre1 * nombre2 }

    @GetMapping("/divide/{nombre1}/{nombre2}")
    fun getDivision(@PathVariable nombre1: Double, @PathVariable nombre2: Double): Any {
        return if (nombre2 != 0.0) nombre1 / nombre2 else "Erreur : Division par zéro"
    }
}

