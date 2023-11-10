import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

const HomeShareModal = ({open, handleOpen }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
        <DialogHeader className='bg-gray-200'>สร้างบ้านแชร์</DialogHeader>
        <DialogBody>
          <div className='flex flex-row gap-4 justify-center'>
            <Input label="ค้นหาบ้านแชร์"/>
            <Input label="ค้นหาบ้านแชร์"/>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>ยกเลิก</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>บันทึก</span>
          </Button>
        </DialogFooter>
      </Dialog>
  )
}

export default HomeShareModal