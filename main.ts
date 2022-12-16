DFRobotMaqueenPlusV2.onIrDatagram(function (message) {
    basic.showNumber(message)
    if (message == 0) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 50)
    }
    if (message == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 0)
    }
    if (message == 20) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 50)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 10)
    }
    if (message == 22) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 10)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 50)
    }
})
DFRobotMaqueenPlusV2.init()
