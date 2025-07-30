import styles from "./FlightList.module.scss";
import { FlightItem } from "../flight-item/FlightItem";
import { Skeleton } from "../../skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import aviaService from "../../../services/avia.service";

import { useRef } from "react";
import { PlaneTakeoff, RefreshCcw } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface Props {
  selectedValue: string;
  selectedSort: string;
  togglePopup: () => void;
}

export function FlightList({
  selectedValue,
  selectedSort,
  togglePopup,
}: Props) {
  const updateRef = useRef<string | null>(null);
  const now = new Date();
  const formattedDate = format(now, "dd.MM.yyyy HH:mm", { locale: ru });

  const { data, isPending, refetch, isRefetching } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const result = await aviaService.getFlights();
      updateRef.current = formattedDate;
      return result;
    },
  });

  const filteredItems =
    selectedValue === "All" && selectedSort === "All airlines"
      ? data
      : data.filter((item: any) => {
          const categoryMatch = item.from.country === selectedValue;
          const nameMatch = item.company === selectedSort;
          return categoryMatch && nameMatch;
        });

  return (
    <div className={styles.flight}>
      <div className={styles.toggleContent}>
        <button onClick={() => refetch()} disabled={isRefetching}>
          <RefreshCcw />
        </button>

        {updateRef.current && (
          <div>
            {isRefetching ? "Updating..." : `Last update: ${updateRef.current}`}
          </div>
        )}
      </div>

      <ul className={styles.list}>
        {isPending ? (
          [...Array(5)].map((_) => <Skeleton />)
        ) : filteredItems.length === 0 ? (
          <div className={styles.noFilters}>
            Нет рейсов по выбранному фильтру
            <PlaneTakeoff color="#D66" />
          </div>
        ) : (
          filteredItems.map((item: any) => (
            <FlightItem key={item.id} item={item} togglePopup={togglePopup} />
          ))
        )}
      </ul>
    </div>
  );
}
