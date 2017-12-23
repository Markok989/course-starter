
import delay from './delay';
/*
class ChapterApi {

    static getAllChapters() {
      /*  return [
            {
                // 1
                "id": "_uosfpm4cn",
                "chapterName": "Chapter 1",
                "lessons": [
                    {
                        // 2
                        "id": "_go2o9zllu",
                        "label": "Lesson1",
                        "content": ""
                    },
                    {
                        "id": "_5fok3c5qu",
                        "label": "Lesson2",
                        "content": ""
                    },
                    {
                        "id": "_xgipqeuom",
                        "label": "Lesson3",
                        "content": ""
                    },
                    {
                        "id": "_xgtpqeuom",
                        "label": "Lesson4",
                        "content": ""
                    }
                ]
            },
            {
                "id": "_uosfpm3cn",
                "chapterName": "Chapter 2",
                "lessons": [
                    {
                        "id": "_go2o9zl2u",
                        "label": "Lesson5",
                        "content": ""
                    },
                    {
                        "lessonId": "_uosfpm2cn",
                        "id": "_5fok3c6qu",
                        "label": "Lesson6",
                        "content": ""
                    },
                    {
                        "id": "_xgipqouom",
                        "label": "Lesson7",
                        "content": ""
                    },
                    {
                        "id": "_xgtpqpuom",
                        "label": "Lesson7",
                        "content": ""
                    }
                ]
            }
        ];
*/

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(Object.assign([], chapters));
//     }, delay);
// });
/*
  }

}

export default ChapterApi;
*/


const chapters = [
    {
        // 1
        "id": "uosfpm4cn",
        "chapterName": "Chapter 1",
        "lessons": [
            {
                // 2
                "id": "go2o9zllu",
                "chapter_id": "uosfpm4cn",
                "label": "Lesson 1",
                "content": "Lekcija 1"
            },
            {
                "id": "5fok3c5qu",
                "chapter_id": "uosfpm4cn",
                "label": "Lesson 2",
                "content": "Lekcija 2"
            },
            {
                "id": "xgipqeuom",
                "chapter_id": "uosfpm4cn",
                "label": "Lesson 3",
                "content": "Lekcija 3"
            },
            {
                "id": "xgtpqeuom",
                "chapter_id": "uosfpm4cn",
                "label": "Lesson 4",
                "content": "Lekcija 4"
            }
        ]
    },
    {
        "id": "uosfpm3cn",
        "chapterName": "Chapter 2",
        "lessons": [
            {
                "id": "go2o9zl2u",
                "chapter_id": "uosfpm3cn",
                "label": "Lesson 5",
                "content": "Lekcija 5"
            },
            {
                "chapter_id": "uosfpm3cn",
                "id": "5fok3c6qu",
                "label": "Lesson 6",
                "content": "Lekcija 6"
            },
            {
                "id": "xgipqouom",
                "chapter_id": "uosfpm3cn",
                "label": "Lesson 7",
                "content": "Lekcija 7"
            },
            {
                "id": "xgtpqpuom",
                "chapter_id": "uosfpm3cn",
                "label": "Lesson 8",
                "content": "Lekcija 8"
            }
        ]
    },
    {
        "id": "uosfpm6cn",
        "chapterName": "Chapter 3",
        "lessons": [
            {
                "id": "go2o9zl2u",
                "chapter_id": "uosfpm6cn",
                "label": "Lesson 9",
                "content": "Lekcija 9"
            },
            {
                "chapter_id": "uosfpm6cn",
                "id": "_5fok3c6qu",
                "label": "Lesson 10",
                "content": "Lekcija 10"
            },
            {
                "chapter_id": "uosfpm6cn",
                "id": "xgipqouom",
                "label": "Lesson 11",
                "content": "Lekcija 11"
            },
            {
                "chapter_id": "uosfpm6cn",
                "id": "_xgtpqpuom",
                "label": "Lesson 12",
                "content": "Lekcija 12"
            }
        ]
    },
    {
        "id": "uosfpm8cn",
        "chapterName": "Chapter 4",
        "lessons": [
            {
                "id": "go2o9zl2u",
                "chapter_id": "uosfpm8cn",
                "label": "Lesson 13",
                "content": "Lekcija 13"
            },
            {
                "chapter_id": "uosfpm8cn",
                "id": "5fok3c6qu",
                "label": "Lesson 14",
                "content": "Lekcija 14"
            },
            {
                "id": "xgipqouom",
                "chapter_id": "uosfpm8cn",
                "label": "Lesson 15",
                "content": "Lekcija 15"
            },
            {
                "id": "xgtpqpuom",
                "chapter_id": "uosfpm8cn",
                "label": "Lesson 16",
                "content": "Lekcija 16"
            }
        ]
    }
];



class ChapterApi {
    static getAllChapters() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], chapters));
            }, delay);
        });
    }
}

export default ChapterApi;