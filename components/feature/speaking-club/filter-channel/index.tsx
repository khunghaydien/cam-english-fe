import { Search } from "@mui/icons-material";
import { Button, Chip, InputAdornment, Menu, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import TuneTwoToneIcon from "@mui/icons-material/TuneTwoTone";
import { useGenerateOption } from "../speaking-club.const";

function index() {
  const { levelOptions, typeOptions, languageOptions } = useGenerateOption();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      level: null,
      type: null,
      language: null,
    },
    onSubmit: () => {},
  });

  const { values, setFieldValue } = formik;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFieldValue("name", e.target.value);
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[500px]">
        <TextField
          label="Search"
          size="small"
          fullWidth
          value={values.name}
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <TuneTwoToneIcon
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="p-3 rounded-lg bg-primary/10 flex flex-col gap-1">
                <div className="font-bold text-primary">Level</div>
                <div className="flex gap-1 flex-wrap">
                  {levelOptions.map(({ label, value }) => (
                    <Chip
                      key={value}
                      label={<>{label}</>}
                      variant={values.level === value ? "filled" : "outlined"}
                      onClick={() => setFieldValue("level", value)}
                    />
                  ))}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 flex flex-col gap-1">
                <div className="font-bold text-primary">Type</div>
                <div className="flex gap-1 flex-wrap">
                  {typeOptions.map(({ label, value }) => (
                    <Chip
                      key={value}
                      label={<>{label}</>}
                      variant={values.type === value ? "filled" : "outlined"}
                      onClick={() => setFieldValue("type", value)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-primary/10 flex flex-col gap-1 max-w-[630px]">
              <div className="font-bold text-primary">Language</div>
              <div className="flex gap-1 flex-wrap">
                {languageOptions.map(({ label, value }) => (
                  <Chip
                    key={value}
                    label={<>{label}</>}
                    variant={values.language === value ? "filled" : "outlined"}
                    onClick={() => setFieldValue("language", value)}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full justify-end w-full gap-3">
              <Button>Cancel</Button>
              <Button variant="outlined">Clear</Button>
              <Button variant="contained">Filter</Button>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default index;
