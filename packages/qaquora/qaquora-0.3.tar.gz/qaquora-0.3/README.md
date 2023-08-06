#### Quora-Scrapper ######

This package will allow you to scrap all Questions-Answers related to any topic e.g. mathematics-and-physics,coronavirus etc from Quora.

It includes two functions for now-

* quora_scrap(self,keyword,PATH) 

**arguments-**

**keyword** - keyword is an argument which describes your topic for e.g coronavirus,coronavirusinindia etc.

**PATH** - to define path of chromedriver.exe file

**return-**

**questions** - questions scrapped for keyword 

**answers** - answers scrapped for each question

**final_qa_dict** - dictionary of scrapped questions-answers

* save_to_csv(self,filename,questions,final_question_answer_pairs_quora_dict)

**arguments-**

**filename** - specify name of your csv file

**questions** - questions returned by function 'quora_scrap'

**final_question_answer_pairs_quora_dict** - specifies question-answer dictionary returned by function 'quora_scrap'



If anyone wants to contribute in this project,feel free to do.

