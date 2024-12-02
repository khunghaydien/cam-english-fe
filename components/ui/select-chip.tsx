import { cloneDeep } from "@apollo/client/utilities";
import { Chip } from "@mui/material";
import React from "react";

export type OptionProps = {
  value: string | number;
  label: string;
  image?: string;
  icon?: string;
};

type SelectChipProps<T> = {
  isMultiple: boolean;
  options: OptionProps[];
  selected: T;
  onSelect: (option: T) => void;
  label: string;
};

const SelectChip = <T extends OptionProps | OptionProps[] | undefined>({
  isMultiple,
  options,
  selected,
  onSelect,
  label,
}: SelectChipProps<T>) => {
  return (
    <div className="p-3 rounded-lg bg-primary/10 flex flex-col gap-1">
      <div className="font-bold text-primary">{label}</div>
      <div className="flex gap-1 flex-wrap">
        {options.map((option: OptionProps) => {
          const { value, label } = option;

          const isOptionSelected: boolean = isMultiple
            ? (selected as OptionProps[])?.some((item) => item.value === value)
            : (selected as OptionProps)?.value === value;

          const handleOptionSelect = (option: OptionProps) => {
            const updatedSelection = isMultiple
              ? toggleSelection(option)
              : option;
            onSelect(updatedSelection as T);
          };

          const toggleSelection = (option: OptionProps): OptionProps[] => {
            const clonedSelection = cloneDeep(selected) ?? [];
            return isOptionSelected
              ? (clonedSelection as OptionProps[]).filter(
                  (item) => item.value !== value
                )
              : [...(clonedSelection as OptionProps[]), option];
          };

          return (
            <Chip
              key={value}
              label={<>{label}</>}
              variant={isOptionSelected ? "filled" : "outlined"}
              onClick={() => handleOptionSelect(option)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SelectChip;
