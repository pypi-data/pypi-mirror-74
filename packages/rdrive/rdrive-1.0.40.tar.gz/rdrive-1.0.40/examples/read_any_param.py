""" @page tutor_py_param Reading single parameter
Complete source code: <br>
\snippet read_any_param.py read_any_param_py
"""

"""! [read_any_param_py] """
import logging
import os
import argparse

import rdrive as rr

logging.basicConfig()
logger = logging.getLogger(os.path.basename(__file__))
logger.setLevel(logging.INFO)

parser = argparse.ArgumentParser()
parser.add_argument(
    "--servo_1_id", type=int, help="first servo ID that you want control"
)
parser.add_argument("--interface", type=str, help="interface name")

args = parser.parse_args()

INTERFACE_NAME = args.interface
SERVO_1_ID = args.servo_1_id

if __name__ == "__main__":
    logger.info("Initializing ServoApi")
    api = rr.ServoApi()

    logger.info("Initializing interface {}".format(INTERFACE_NAME))
    interface = api.init_interface(INTERFACE_NAME)

    logger.info("Initializing servo id {}".format(SERVO_1_ID))
    servo = interface.init_servo(SERVO_1_ID)

    logger.info("Setting servo to operational state")
    servo.set_state_operational()

    position_rotor = servo.read_parameter(rr.APP_PARAM_POSITION_ROTOR)
    logger.info("Position rotor {}".format(position_rotor))

    velocity_rotor = servo.read_parameter(rr.APP_PARAM_VELOCITY_ROTOR)
    logger.info("Velocity rotor {}".format(velocity_rotor))

    voltage_input = servo.read_parameter(rr.APP_PARAM_VOLTAGE_INPUT)
    logger.info("Voltage input {}".format(voltage_input))

    current_input = servo.read_parameter(rr.APP_PARAM_CURRENT_INPUT)
    logger.info("Current input {}".format(current_input))
"""! [read_any_param_py] """
