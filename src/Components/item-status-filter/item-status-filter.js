import './item-status-filter.css';

function ItemStatusFilter() {
  return (
    <div className="ItemStatusFilter">
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">Left</button>
        <button type="button" class="btn btn-warning">Middle</button>
        <button type="button" class="btn btn-success">Right</button>
      </div>
    </div>
  );
}

export default ItemStatusFilter;
