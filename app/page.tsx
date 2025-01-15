"use client";
import MainLayout from "@/components/layout/main-layout";
import { Button, IconButton } from "@mui/material";
import clsx from "clsx";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getTextEllipsis } from "@/components/utils";
import FilterSpeakingClub from "@/components/feature/speaking-club/filter-speaking-club";
import CreateExpense from "@/components/feature/expense/create-expense";

const columns: Column[] = [
  { name: "Date", key: "date" },
  { name: "Description", key: "description" },
  { name: "Amount", key: "amount" },
  { name: "Action", key: "action" },
];

type Expense = {
  date: Date;
  description: string;
  amount: number;
};

const expenses: Expense[] = [
  { date: new Date("2025-10-02"), description: "Ăn sáng", amount: 20 },
  { date: new Date("2025-10-02"), description: "Mua sách", amount: 50 },
  { date: new Date("2025-11-02"), description: "Tiền xăng", amount: 50.5 },
  { date: new Date("2025-11-02"), description: "Tiền xăng 1", amount: 50.5 },
  { date: new Date("2025-11-02"), description: "Tiền xăng 2", amount: 50.5 },
  { date: new Date("2025-11-02"), description: "Tiền xăng 3", amount: 50.5 },
];

const formatData = (expenses: Expense[]) => {
  const groupedExpenses = expenses.reduce(
    (acc, { date, description, amount }) => {
      const dateString = date.toISOString().split("T")[0];

      if (!acc[dateString]) {
        acc[dateString] = [];
      }

      acc[dateString].push({ description, amount });

      return acc;
    },
    {} as Record<string, Omit<Expense, "date">[]>
  );

  return Object.entries(groupedExpenses).map(([date, details]) => ({
    date,
    details,
  }));
};

const createExpenseRow = (
  {
    date,
    details,
  }: {
    date: string;
    details: Omit<Expense, "date">[];
  },
  isOpen: boolean,
  isEdit: boolean,
  onToggleDetail: () => void,
  onEditExpense: () => void,
  onCancel: () => void,
  onSave: () => void,
  onDeleteExpense: () => void
) => {
  return {
    date,
    description: getTextEllipsis(
      details.map((item) => item.description).join(", ")
    ),
    amount: (
      <div className="flex items-center gap-3">
        {details.reduce((sum, expense) => sum + expense.amount, 0)}
        <IconButton
          disabled={isEdit}
          aria-label="expand row"
          size="small"
          onClick={onToggleDetail}
        >
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
    ),
    details,
    action: (
      <div className="flex items-center gap-3">
        {isEdit ? (
          <>
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="contained" onClick={onSave}>
              Save
            </Button>
          </>
        ) : (
          <IconButton size="small" onClick={onEditExpense}>
            <EditIcon color="primary" />
          </IconButton>
        )}
        <IconButton size="small" onClick={onDeleteExpense}>
          <DeleteIcon color="error"></DeleteIcon>
        </IconButton>
      </div>
    ),
  };
};

export type Column = {
  name: string;
  key: string;
  className?: string;
};

export type CommonTableProps = {
  columns: Column[];
  rows: any[];
};

export default function Page() {
  const [openRows, setOpenRows] = React.useState<Record<number, boolean>>({});
  const [editRows, setEditRows] = React.useState<Record<number, boolean>>({});

  const handleToggleDetail = (index: number) => {
    setOpenRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleEditExpense = (index: number) => {
    setOpenRows((prev) => ({ ...prev, [index]: true }));
    setEditRows((prev) => ({ ...prev, [index]: true }));
  };

  const handleCancel = (index: number) => {
    setOpenRows((prev) => ({ ...prev, [index]: false }));
    setEditRows((prev) => ({ ...prev, [index]: false }));
  };

  const handleSave = (index: number) => {};
  const handleDeleteExpense = (index: number) => {};

  const rows = React.useMemo(() => {
    return formatData(expenses).map((row, index) => {
      return createExpenseRow(
        row,
        openRows[index],
        editRows[index],
        () => handleToggleDetail(index),
        () => handleEditExpense(index),
        () => handleCancel(index),
        () => handleSave(index),
        () => handleDeleteExpense(index)
      );
    });
  }, [openRows]);

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-6 flex-wrap">
          <FilterSpeakingClub />
          <CreateExpense />
        </div>
        <div className="flex flex-col w-full border border-muted-foreground border-[0.5px] rounded-sm">
          <div
            className={`grid grid-cols-4 items-center border-b border-muted-foreground border-[0.5px bg-muted rounded-t-sm`}
          >
            {columns.map((column) => (
              <div
                key={column.key}
                className={clsx(
                  "p-3 min-h-[58px] flex items-center",
                  column.className
                )}
              >
                {column.name}
              </div>
            ))}
          </div>
          {rows.map((row: any, index) => (
            <div
              key={index}
              className={`${
                index !== rows.length - 1
                  ? "border-b border-muted-foreground border-[0.5px"
                  : ""
              }`}
            >
              <div className={`grid grid-cols-4 items-center`}>
                {columns.map((column: Column) => (
                  <div
                    key={column.key}
                    className={clsx("p-3", column.className)}
                  >
                    {row[column.key]}
                  </div>
                ))}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openRows[index] ? "max-h-content" : "max-h-0"
                }`}
              >
                {openRows[index] && (
                  <div className="grid grid-cols-1">
                    {row.details.map((detail: any, detailIndex: number) => (
                      <div
                        key={detailIndex}
                        className={`grid grid-cols-${columns.length}`}
                      >
                        {columns.map((column) => (
                          <div
                            key={column.key}
                            className={clsx(
                              "p-3 text-primary",
                              column.className
                            )}
                          >
                            {detail[column.key]}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
