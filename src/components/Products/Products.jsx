import React, { useEffect, useState } from "react";
import { List, Select, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import {
  getAllProductsApi,
  getProductsByCategoryApi,
} from "../../api/indexAPI";
import { getSortedItems, sorterOptions } from "../../utils/utils";
import CardItem from "../CardItem/CardItem";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useLocalStorage("sortOrder", "az");
  const [selectValue, setSelectValue] = useLocalStorage("selectValue", "az");
  const [selectedItem, setSelectedItem] = useLocalStorage("selectedItem", null);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    (params?.categoryId
      ? getProductsByCategoryApi(params.categoryId)
      : getAllProductsApi()
    ).then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return (
      <div className="spinner">
        <Spin spinning />
      </div>
    );
  }

  return (
    <div className="productsContainer">
      <div>
        <Typography.Text>View items sorted by: </Typography.Text>
        <Select
          defaultValue={selectValue}
          onChange={(value) => setSortOrder(value)}
          onSelect={(value) => setSelectValue(value)}
          options={sorterOptions}
        />
      </div>
      <List
        grid={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 5, xxl: 6 }}
        renderItem={(product) => {
          return (
            <CardItem
              key={product.id}
              product={product}
              onClick={() => {
                if (selectedItem?.id === product.id) {
                  setSelectedItem(null);
                } else {
                  setSelectedItem(product);
                }
              }}
              isSelected={selectedItem?.id === product.id}
            />
          );
        }}
        dataSource={getSortedItems(items, sortOrder)}
      />
    </div>
  );
};

export default Products;

