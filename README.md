# 301-Final-Project
Final Project for Codefellows 301

M.V.P.
-Patient Help System
  -Central app relies on map
  - Patient Location
  - Geo-location via browser
  - Big Red button for active alert
  -Method for deactivating active alert

- Information/Documentation
  - Not a substitute for 911!!
  - is this an OD
  - how can I help
  - Where can I get a license to carry the drug

- Register Carriers of Narcan
  - DB for registered carries
  - Notification System (may have to mock this out)
  - Active alerts / responder system
  - toggle availability

Stretch Goals
- Heroku postures DB (but apparently required)


User Stories
- As a registered user I would like the ability to toggle my availability to respond.
- As a registered user I would like to define my availability by a distance from my main address
- As a registered user I would like the option to add a second address that I frequent

- As a general user I would like the ability to access resources for helping identifying heroine ODs
- As a general user I would like the common signs of an OD directly laid out
- As a general user I would like an easy to use interface (button) that allows me to alert registered Narcan carries to an OD



Page Scaffolding

*Main page*
  Carrier Sign-in
  Report an Overdose
  "Disclaimer"

*Carrier Sign-in Branch*
  Form:
    User information, options on availability (range from main address) and information to display (show phone number or not)
  Activate/Deactivate availability
  Map with nearby Patients

*General User Branch (Report an Overdose) - Informational/Transitional Page*
  What does an OD look like: Series of checkboxes to help users identify the situation
  Links to additional information
  Report and Overdose (button)

*Overdose reporting*
  Map
    Ability to drop a pin
  List of carries that have agreed to share information



  Styling Guide Start v1.0
  Muted blue/grey background color (maithrika downloaded)
Style ‘report an OD’ button for homepage, make big circle. Scalable.
Font: Ariel 2
Narcan button top right? nav bar link, no button
Report OD on 2nd page, red button w/ white font
Resize google map to fit page
Links should be in navigation bar up top
