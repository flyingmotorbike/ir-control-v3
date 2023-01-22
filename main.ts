function Turn_Right () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 50)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 25)
}
DFRobotMaqueenPlusV2.onIrDatagram(function (message) {
    basic.showNumber(message)
    if (message == 13) {
        Move_Forward()
    }
    if (message == 6) {
        Stop()
    }
    if (message == 12) {
        Turn_Right()
    }
    if (message == 14) {
        Turn_Left()
    }
    if (message == 17) {
        Move_Backward()
    }
})
function Move_Backward () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 50)
}
function Turn_Left () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 25)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 50)
}
function Move_Forward () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 50)
}
function Stop () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 0)
}
DFRobotMaqueenPlusV2.init()
