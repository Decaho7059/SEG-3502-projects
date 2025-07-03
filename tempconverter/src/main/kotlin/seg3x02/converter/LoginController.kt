package seg3x02.converter

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class LoginController: WebMvcConfigurer {
    override fun addViewControllers(registry: ViewControllerRegistry) {
        println("Registering /login view controller")
        registry.addViewController("/login").setViewName("login")
    }
}
