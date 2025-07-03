package seg3x02.booksapigraphql.resolvers

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import seg3x02.booksapigraphql.entity.Employee
import seg3x02.booksapigraphql.repository.EmployeeRepository
import seg3x02.booksapigraphql.resolvers.types.CreateEmployeeInput

@Controller
class EmployeesResolver(private val employeeRepository: EmployeeRepository) {

    @QueryMapping
    fun employees(): List<Employee> = employeeRepository.findAll()

    @QueryMapping
    fun employeeById(@Argument employeeId: String): Employee? = employeeRepository.findById(employeeId).orElse(null)

    @MutationMapping
    fun newEmployee(@Argument createEmployeeInput: CreateEmployeeInput): Employee {
        val employee = Employee(
            name = createEmployeeInput.name,
            position = createEmployeeInput.position,
            department = createEmployeeInput.department,
            salary = createEmployeeInput.salary
        )
        return employeeRepository.save(employee)
    }

    @MutationMapping
    fun deleteEmployee(@Argument employeeId: String): Boolean {
        return if (employeeRepository.existsById(employeeId)) {
            employeeRepository.deleteById(employeeId)
            true
        } else false
    }

    @MutationMapping
    fun updateEmployee(@Argument employeeId: String, @Argument createEmployeeInput: CreateEmployeeInput): Employee? {
        return employeeRepository.findById(employeeId).map { existingEmployee ->
            existingEmployee.apply {
                name = createEmployeeInput.name
                position = createEmployeeInput.position
                department = createEmployeeInput.department
                salary = createEmployeeInput.salary
            }
            employeeRepository.save(existingEmployee)
        }.orElse(null)
    }
}
