# Doctor Consult Waiting Time Study Case

## Background
You are working on an online queuing system for clinics that only accept walk-in patients. Through
this system, walk-in patients can now queue online and receive real-time updates to their waiting time.
Unlike appointments, patients who queue online cannot select their preferred time slots – the system
helps them secure a spot in the queue and provides real-time updates to their waiting time based on
their queue status.

The patients’ waiting times largely depend on (1) the average consultation time of their doctors, and
(2) the amount of persons ahead of them in the queue. The longer it takes for a doctor to consult each
patient, the longer the remaining patients in the queue have to wait. Similarly, the greater the amount
of persons ahead of a patient in the queue, the longer the patient has to wait.

There are many factors that can affect the consultation time. These include emergencies, additional
treatments, etc. Moreover, the average consultation time differs from doctor to doctor. For the purpose
of this case study, the average consultation time(s) will be given to you and you shall assume those
value(s) when working on your answers.

## Case Study

### Please explain your answers and provide workings, where applicable.

Case Study 1

Clinic X has 1 doctor. The doctor’s average consultation time is 3 minutes per patient. Currently, there
are 5 patients in the queue and the doctor is not seeing any patient. John decides to queue online and
he becomes the 6th patient in the queue, having 5 patients ahead of him. Since there are 5 patients
ahead and each taking 3 minutes on average, the waiting time for John is estimated to be 15 minutes.

Question 1:

When should the countdown in waiting time, i.e. from 15 minutes, start for John? The moment he
queues online, or when the doctor starts seeing the first patient in the queue?

Question 2:

Suppose the case has changed – at the time John queues online, there are 7 patients ahead of him
and the doctor is currently seeing one of the 7 patients, Peter. Assuming that the doctor’s
average consultation time per patient is 4 minutes, what will John’s estimated waiting time be given
that, at the time John joins the queue, Peter has already gone to the consultation room for the
following durations?

```
(a) 2 minutes
(b) 5 minutes
```

## Case Study 2

Clinic Y has 2 doctors, Doctor A and Doctor B. The average consultation times per patient are 3
minutes for Doctor A and 4 minutes for Doctor B. Currently, there are 14 patients in the queue and
both doctors are not seeing any patient. John decides to queue online and he becomes the 15th
patient in the queue, with 14 patients ahead of him.

Question 1:

Assuming that all the patients in the queue, including John, have no specific preferences for the
doctors they want to consult, what will John’s estimated waiting time be when he joins the queue?

Question 2:

Suppose the case has changed – at the time John queues online, there are 14 patients ahead of him
and while Doctor A is not seeing any patient (i.e. Doctor A is available), Doctor B is currently seeing
the first patient, Lucas, who has been in the consultation room for the past 2 minutes.
Assuming that the average consultation times per patient for both doctors remain as 3 minutes and 4
minutes respectively, what will John’s estimated waiting time be when he joins the queue?

## Bonus

### This section is not mandatory.

Write an algorithm in JavaScript to calculate patient’s estimated waiting time. The algorithm should
work for different amount of doctors and patient queue positions – it should accept an array of Doctor
objects and patient’s position in queue as inputs and return the patient’s waiting time as output. Your
codes should also include the implementation for the Doctor class. For simplicity, assume all the
patients in the queue have no preference for the doctors they want to consult and all the doctors are
available and not seeing any patient initially.


