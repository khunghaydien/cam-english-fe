"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IconButton } from "@mui/material";
import CloseTwoTone from "@mui/icons-material/CloseTwoTone";
import { useMutation } from "@apollo/client";
import Input from "@/components/ui/input";
import { useFormik } from "formik";
import { scrollToFirstElement } from "@/components/utils";
import { createExpenseValidation } from "./validatation";
import { CREATE_EXPENSE } from "@/graphql/mutation/expense";
import { ImSpinner2 } from "react-icons/im";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateExpense = ({ onCreate }: { onCreate: () => void }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
    },
    validationSchema: createExpenseValidation,
    onSubmit: (values) => {
      setTimeout(() => {
        scrollToFirstElement("error-message-scroll");
      });
      handleSubmit(values);
    },
  });

  const { values, setFieldValue, errors, touched } = formik;

  const onChangeValue = (value: unknown, keyname: string) => {
    setFieldValue(keyname, value);
  };

  const [createExpense, { loading }] = useMutation(CREATE_EXPENSE);

  const handleSubmit = async (values: any) => {
    try {
      await createExpense({
        variables: {
          createExpenseDto: {
            date: Date.now(),
            description: values.description,
            amount: parseInt(values.amount),
          },
        },
      });
    } catch (error) {
    } finally {
      onCreate();
      handleClose();
    }
  };
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
      >
        Create Expense
      </Button>
      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "100%", maxWidth: "700px" } }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <form
          className="flex flex-col px-6 py-3 gap-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="font-bold text-lg">Create Expense</div>
            <IconButton color="default" onClick={handleClose}>
              <CloseTwoTone />
            </IconButton>
          </div>
          <div className="flex gap-6 items-center w-full">
            <Input
              required
              label="Description"
              value={values.description}
              error={!!errors.description && !!touched.description}
              helperText={
                !!errors.description &&
                !!touched.description &&
                (errors.description as string)
              }
              onChange={(e) => onChangeValue(e.target.value, "description")}
            />
            <Input
              required
              type="number"
              label="Amount"
              value={values.amount}
              error={!!errors.amount && !!touched.amount}
              helperText={
                !!errors.amount && !!touched.amount && (errors.amount as string)
              }
              onChange={(e) => onChangeValue(e.target.value, "amount")}
            />
          </div>
          <div className="flex items-center justify-end gap-3">
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              loading={loading}
              loadingIndicator={
                <ImSpinner2 className="animate-spin text-primary w-6 h-6" />
              }
            >
              Submit
            </Button>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
};
export default CreateExpense;
