import { toastWarnNotify } from "@/helpers/Toastify";

export const handleClick = (e: any, item: any,customerSeats:any,setCustomerSeats:any,setSelectedSeat:any,seatInfos:any)=>{
        // If the user clicks on the seat of his choice delete it from customerSeats
        if (customerSeats.some((seat:any) => seat.id === item.id)) {
          const newC = customerSeats.filter((seat:any) => seat.id !== item.id);
          setCustomerSeats([...newC]);
          setSelectedSeat(false);
          return;
        }
    
        if (item.isEmpty) {
          if (customerSeats.length >= 5) {
            toastWarnNotify("En fazla 5 koltuk seçebilirsiniz!");
            return;
          }
          // open popper
          setSelectedSeat(item.id);
    
          // if user clicks to gender icons set ticket to customerSeats
          if (e.target.className.includes("male")) {
            // if user choose different gender give error
            let nextOrPrev = item.id % 2 == 0 ? -1 : 1;
            const gender = e.target.className;
            if (!seatInfos[item.id - 1 + nextOrPrev].gender) {
              setCustomerSeats([
                ...customerSeats,
                { id: item.id, gender: gender, isEmpty: false },
              ]);
              // close popper
              setSelectedSeat(false);
              return;
            } else {
              if (seatInfos[item.id - 1 + nextOrPrev].gender != gender) {
                toastWarnNotify(
                  `Seçtiğiniz koltuk yalnızca ${
                    gender === "male" ? "kadın" : "erkek"
                  } yolculara satılabilir.`
                );
                setSelectedSeat(false);
                return;
              }
            }
            setCustomerSeats([
              ...customerSeats,
              { id: item.id, gender: gender, isEmpty: false },
            ]);
            // close popper
            setSelectedSeat(false);
          }
        } else {
          toastWarnNotify("Bu koltuk zaten alınmış");
        }
}