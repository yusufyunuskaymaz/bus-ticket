import React from "react";
import bgImg from "../../assets/images/bus-bg.jpg";
import styles from "./style.module.css";
import { AutoComplete } from "@/components/AutoComplete";

const deneme = () => {
  return (
    <div
      className={`${styles.hero} text-white font-bold text-3xl border-white`}
    >
      <div className={styles.cardWrapper}>
        <div className="pb-3">
          <h6 className="text-white text-2xl font-bold pb-3">
            Ucuz Otobüs Bileti Bulun
          </h6>
          <h6 className="text-white text-lg font-normal">
            Fiyatları karşılaştırın ve online otobüs bileti rezervasyonu yapın
          </h6>
        </div>
        <div className={styles.ticketCard}>
          <form className="space-y-6">
            <div className="flex-center gap-3">
              <div className="flex-1">
                <label htmlFor="nereden">Nereden</label>
                
                <AutoComplete />
              </div>
              <div className="flex-1">
                <label htmlFor="nereden">Nereye</label>
                <AutoComplete />
                
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label htmlFor="date">Gidiş Tarihi</label>
                  <input value="Ankara" className="p-2" type="date" id="date" />
                </div>
                <div className="flex-1 gap-3 flex items-end pb-1">
                  <button className="bg-gray-500">Bugün</button>
                  <button className="bg-gray-500">Yarın</button>
                </div>
              </div>
            </div>
            <button>Otobüs Bileti Bul</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default deneme;
