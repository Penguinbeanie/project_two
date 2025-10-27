{% macro scd2_merge(this, src, key) %}
-- Closes old records and inserts new current ones
ALTER TABLE {{ this }}
UPDATE valid_to = today(), is_current = 0
WHERE is_current = 1
AND {{ key }} IN (
  SELECT {{ key }} FROM {{ src }}
);
INSERT INTO {{ this }}
SELECT * FROM {{ src }};
{% endmacro %}