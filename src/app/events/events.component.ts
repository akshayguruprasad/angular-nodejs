import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList: any[] = [
    {
      "heading": "<h1>CLOSE THE GAP BETWEEN YOUR DREAMS AND THE PERFECT JOB*<h1>",
      "title": "ADOBE AEM",
      "prize": "15,00,000/-",
      "endson": "28th Oct",
      "url": "https://www.youtube.com/embed/eNNCLw4bFbw",
      "levels": [
        {
          "attempts": "2",
          "duration": "30 minutes",
          "score": "40/100 In Round 1",
          "objective": "Identify And Felicitate Top Candidates In Salesforce",
          "ended": "14th Oct (94 Days Ago)"
        },
        {
          "attempts": "Unlimited",
          "duration": "8 days",
          "score": "88/100 In Round 2",
          "objective": "Identify And Felicitate Top Candidates In Salesforce",
          "ended": "14th Oct (94 Days Ago)"
        },
        {
          "attempts": "Unlimited",
          "duration": "3 days",
          "score": "Identify And Felicitate Top Candidates In Salesforce",
          "objective": "Identify And Felicitate Top Candidates In Salesforce",
          "ended": "28th Oct (80 Days Ago)"
        }
      ],
      "details": {
        "AboutChallenge": {
          "topic": "Why take the Adobe AEM challenge?",
          "topic_details": "Are you passionate about delivering the best digital experience for your customers? Then you are the right candidate to participate in the Tech Challenge edition 2018. In this unique challenge, you can showcase your skills in offering customers exceptional digital experiences using Adobe AEM.",
          "whychallenge": [
            "Cash prizes worth INR 10,00,000* to be won",
            "An opportunity to be a part of a giant like Capgemini India",
            "Compete with the best tech enthusiasts in a national competition",
            "Showcase your skills to the experts",
            "Meet and work alongside global leaders and tech disruptors"
          ]
        },
        "Prizes": {
          "st": "₹ 30,000 Theme Winner",
          "nd": "₹ 20,000 Theme 1st RunnerUp",
          "rd": "₹ 500 Early bird prizes (1st 10 players to complete Level 2)"
        },
        "Rules": {
          "title": "Important Rules for all the Theme Contests:",
          "contest": [
            "This hackathon has been broadly divided into THREE levels, that is \"Screening Phase\", \"Online Hackathon Phase\" and \"Offline Hackathon Phase.\"",
            "The first 2 levels will be online but the final level (3rd level) will be launched at a specific date and time and this will be offline challenge event where in top 5 Participants shortlisted from the Level 2 will be invited to one of the Capgemini Campus.",
            "All the above three levels will combination of MCQ + Problem Statement based contests.",
            "Level 1 will be a MCQ contest and Level 2 will be a Problem Statement contest, both will have equal weightage of 100 points each.",
            "A user has to answer 40% of the questions correctly in screening phase (Level 1) to unlock Online Hackathon Phase (level 2).",
            " The highest score from both the attempts will be considered as your final score for that level.",
            "Problem Statement and MCQs will be timed. Time utilised for answering will be accounted for to tabulate the leader board.",
            "There will be no negative marking in any of the levels."
          ],
          "rules_highlight": "Rules according to each level are highlighted below",
          "highlight": [
            {
              "level": "Level - 1: Screening Phase",
              "value": [
                "There will be a total 25 Multiple choice question for which 30 minutes allotted to complete the Level 1.",
                "Each user will get 2 attempts per level to improve their scores in this level.",
                "Each correct answer will fetch the user 4 points.",
                "Once you will submit your answers; you will be able to see the score on the result page."
              ]
            },
            {
              "level": "Level - 2: Online Hackathon Phase",
              "value": [
                "There will be single problem statement in this round for which time duration of 7 days will be alloted to the candidate to complete Level 2.",
                "Number of attempts for the ideation phase is unlimited.",
                "All the submissions must be submitted on the Capgemini site.",
                "Participants will be able to access the problem statements once the \"Partcipate Now\" button is clicked.",
                "During online hackathon, you can participate from anywhere.",
                "Once the hackathon starts, you will get an option to submit your hack, you can submit as many times as you want, the last hack will be considered as the final submission.",
                "Participants can use any tools or libraries for building their solution. There is no restriction on the tools that can be used.",
                "Winners of the contest will be chosen solely on the discretion of Capgemini. Please ensure to update the participant's profile and contact details."
              ]
            },
            {
              "level": "Level - 2: Offline Hackathon Phase",
              "value": [
                "All the details regarding this round will be given only to the shortlisted candidates from level 2."
              ]
            }
          ]
          
        },"deliverables": {
          "topic": "Deliverables Expected From The Participants:",
          "deliver": [
            {
              "level": "For Level - 1: Screening Phase:",
              "value": [
                "You need to answer 25 MCQs in 30 Minutes.",
                "Each correct answer will fetch the user 4 points.",
                "Maximum two attempts are given in screening round",
                "There you need to click on the option you feel is correct.",
                "Before submitting the solution you can cross check all the questions again.",
                "For submitting the test you need to answer at least one question."
              ]
            },
            {
              "level": "Level - 2: Online Hackathon Phase:",
              "value": [
                "Information Architecture and your design and why this approach.",
                "Brief explanation of idea what makes it unique.",
                "Technology Stack.",
                "Workflow document and deployment instructions if any.",
                "Source code or repo link.",
                "A demonstration video or demo url of the idea presented.",
                "You can refine your code and enhance it based on feedback from industry leaders."
              ]
            }
          ]
        },
        "TCs": [
          {
            "level": "Level -1:Tie Break Logic for Theme contest on Leader board:",
            "value": [
              "The user with highest marks (sum of both levels) will be ranked higher.",
              "Point 2 being equal, the user with the higher number of correct answers in the MCQ will be ranked higher.",
              "Point 3 being equal, the user who has taken lesser time to answer the MCQs will be ranked higher.",
              "Point 4 being equal, user with the lesser time taken to compile the problem will be ranked higher.",
              "In case of all the top 5 being equal, points 1 through 5 will be repeated with Level 2 and later with Level 1.",
              "Everything being equal, the referral scores of the 2 candidates will be used to sort out the tie break.",
              "In case this too is equal, the user who participated in the contest at the earlier date will be ranked higher."
            ]
          },
          {
            "level": "Level-2:Gratifications for Online contest:",
            "value": [
              "1st Prize - Cash Prize worth INR 30,000/-.",
              "2nd Prize - Cash Prizeworth INR 20,000/-.",
              "Early bird prizes (1st 10 players to complete Level 2) win Gift.",
              "Voucher of worth INR 500/-for each theme contest.",
              "All Prize Money will be subject to tax deduction and the same shall be borne by the winners."
            ]
          }
        ]
        
      }
    }
  ]
    ;

  event: any[];
  constructor() {



  }

  ngOnInit() {
    this.event = this.eventList[0];
  }

}
