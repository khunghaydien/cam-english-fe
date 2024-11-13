import {
  Box,
  FormHelperText,
  TextField,
  TextFieldProps,
  Tooltip,
} from "@mui/material";
import React, { forwardRef } from "react";
const Input = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      required,
      error,
      helperText,
      size = "small",
      variant = "outlined",
      label,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box className="font-medium">
          {label}
          {required && (
            <Tooltip title={"required"}>
              <Box
                component={"span"}
                sx={{
                  color: (theme) => theme.palette.error.main,
                }}
              >
                *
              </Box>
            </Tooltip>
          )}
        </Box>
        <Box
          ref={ref}
          sx={{
            position: "relative",
          }}
        >
          <TextField
            error={error}
            size={size}
            fullWidth
            variant={variant}
            {...props}
          />
          {error && helperText && (
            <FormHelperText
              className={"error-message-scroll"}
              sx={{
                margin: 0,
                position: "absolute",
                top: "100%",
                left: 0,
                color: (theme) => theme.palette.error.main,
              }}
            >
              {helperText}
            </FormHelperText>
          )}
        </Box>
      </Box>
    );
  }
);

export default Input;
