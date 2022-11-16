const variables = {
    title: "Project name",
    tasks: {
        todo: [
            {
                title: "Название задачи длинное тестовое",
                description: "Описание задачи",
                expires: "1 hour"
            },
            {
                title: "Название задачи",
                description: "Описание задачи",
                expires: "1 hour"
            },
            {
                title: "Название задачи",
                description: "Описание задачи",
                expires: "1 hour"
            }
        ],
        inWork: [
            {
                title: "Задача",
                description: "Задача",
                expires: "2 hour"
            }
        ],
        done: [
            {
                title: "Задача",
                description: "Задача",
                completedDate: "2 hour"
            },
            {
                title: "Задача",
                description: "Задача",
                completedDate: "2 hour"
            }
        ]
    }
}

module.exports = { variables }