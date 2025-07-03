package seg3x02.booksapigraphql.entity

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "employee")
data class Employee(
    @Id var employeeId: String = "",
    var name: String,
    var position: String,
    var department: String,
    var salary: Float
)
