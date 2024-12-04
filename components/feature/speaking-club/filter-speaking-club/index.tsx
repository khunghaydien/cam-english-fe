import { Search } from "@mui/icons-material";
import { Button, InputAdornment, Menu, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import TuneTwoToneIcon from "@mui/icons-material/TuneTwoTone";
import { useGenerateOption } from "../speaking-club.const";
import SelectChip, { OptionProps } from "@/components/ui/select-chip";
import { useDispatch, useSelector } from "react-redux";
import {
  initialFilterSpeakingRoomDto,
  selectSpeakingClub,
  setFilterSpeakingClubDto,
  setPaginationDto,
  SpeakingClubState,
} from "@/stores/reducers/speaking-club.reducer";
import { AppDispatch } from "@/stores";
import { debounce } from "lodash";
import { initialPaginationDto } from "@/consts";
function index() {
  const dispatch = useDispatch<AppDispatch>();
  const { filterSpeakingClubDto }: SpeakingClubState =
    useSelector(selectSpeakingClub);
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
    initialValues: filterSpeakingClubDto,
    onSubmit: () => {},
  });

  const { values, setFieldValue } = formik;

  const debouncedDispatch = useCallback(
    debounce((value) => {
      dispatch(setFilterSpeakingClubDto({ name: value }));
      dispatch(setPaginationDto(initialPaginationDto));
    }, 400),
    [dispatch]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFieldValue("name", e.target.value);
    debouncedDispatch(e.target.value);
  };

  const handleClear = () => {
    handleClose();
    formik.setValues(initialFilterSpeakingRoomDto);
    dispatch(setFilterSpeakingClubDto(initialFilterSpeakingRoomDto));
  };

  const handleFilter = () => {
    handleClose();
    dispatch(
      setFilterSpeakingClubDto({
        ...filterSpeakingClubDto,
        language: values.language,
        level: values.level,
        type: values.type,
      })
    );
    dispatch(setPaginationDto(initialPaginationDto));
  };

  return (
    <div className="w-full max-w-[500px]">
      <div className="w-full">
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
          sx={{
            marginTop: "10px",
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <SelectChip
                isMultiple
                label="Level"
                options={levelOptions}
                onSelect={(option?: OptionProps[]) =>
                  setFieldValue("level", option)
                }
                selected={values.level}
              />
              <SelectChip
                isMultiple
                label="Type"
                options={typeOptions}
                onSelect={(option?: OptionProps[]) =>
                  setFieldValue("type", option)
                }
                selected={values.type}
              />
            </div>
            <div className="max-w-[630px]">
              <SelectChip
                isMultiple
                label="Language"
                options={languageOptions}
                onSelect={(option?: OptionProps[]) =>
                  setFieldValue("language", option)
                }
                selected={values.language}
              />
            </div>
            <div className="flex w-full justify-end  gap-3">
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="outlined" onClick={handleClear}>
                Clear
              </Button>
              <Button variant="contained" onClick={handleFilter}>
                Filter
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default index;
