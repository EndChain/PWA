@echo off & setlocal EnableDelayedExpansion

for /L %%a in (1 1 30) do (
        call:rand 1 8
        echo !RAND_NUM!
        mkdir %%a
        cd %%a
        for /L %%i in (1 1 !RAND_NUM!) do (
                call:rand 10 23
                SET /A HOUR= !RAND_NUM!
                call:rand 10 59
                SET /A MIN= !RAND_NUM!
                call:rand 10 59
                SET /A SEC= !RAND_NUM!
                call:rand 1 100
                SET /A TICKET= !RAND_NUM!
                echo "%%i on 2018-09-%%a !hour!:!min!:!sec!" > commit.md
                SET GIT_COMMITTER_DATE="2018-09-%%a !hour!:!min!:!sec!"
                SET GIT_AUTHOR_DATE="2018-09-%%a !hour!:!min!:!sec!"
                git add commit.md -f
                git commit --date="2018-09-%%a !hour!:!min!:!sec!" -m "pushed ticket #!ticket!"
        )
        cd ..
)

goto:EOF

REM The script ends at the above goto:EOF.  The following are functions.

REM rand()
REM Input: %1 is min, %2 is max.
REM Output: RAND_NUM is set to a random number from min through max.
:rand
SET /A RAND_NUM=%RANDOM% * (%2 - %1 + 1) / 32768 + %1
goto:EOF
