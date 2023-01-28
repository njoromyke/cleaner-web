export const formatTimeAgo = (date) => {
  return new Intl.RelativeTimeFormat("en", { style: "short" }).format(
    -Math.round(
      (new Date().getTime() - new Date(date).getTime()) / 1000 / 60 / 60 / 24
    ),
    "day"
  );
};
